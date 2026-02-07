import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  updateField,
  setFormStatus,
  setErrorMessage,
  resetForm,
} from '../store/bookingFormSlice';
import type { BookingFormData } from '../types';

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID ?? '';

const BOOKING_EMAIL = 'simkova54321@gmail.com';

export default function BookingForm({ formIdPrefix = 'booking' }: { formIdPrefix?: string }) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { data, status, errorMessage } = useAppSelector((s) => s.bookingForm);

  const handleChange = (field: keyof BookingFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    dispatch(updateField({ field, value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.gdprConsent) {
      dispatch(setErrorMessage(t('contact.error')));
      dispatch(setFormStatus('error'));
      return;
    }
    if (!FORMSPREE_FORM_ID) {
      dispatch(setErrorMessage('Formspree is not configured. Set VITE_FORMSPREE_FORM_ID in .env'));
      dispatch(setFormStatus('error'));
      return;
    }
    dispatch(setFormStatus('sending'));
    dispatch(setErrorMessage(''));
    try {
      // Czech labels so the owner receives email in Czech (Czechia)
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: JSON.stringify({
          _subject: 'Rezervace Penzion Na Kopečku',
          Jméno: data.name,
          Email: data.email,
          'Tel.': data.phone,
          Příjezd: data.arrivalDate,
          Odjezd: data.departureDate,
          'Počet osob': data.numberOfPeople,
          Poznámky: data.notes || '—',
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) {
        throw new Error('Formspree error');
      }
      dispatch(setFormStatus('success'));
      dispatch(resetForm());
    } catch {
      dispatch(setFormStatus('error'));
      dispatch(setErrorMessage(t('contact.error')));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
      <div className="row g-2">
        <div className="col-md-6">
          <label htmlFor={`${formIdPrefix}-name`} className="form-label small">{t('contact.name')} *</label>
          <input id={`${formIdPrefix}-name`} type="text" name="from_name" className="form-control rounded-4" value={data.name} onChange={handleChange('name')} required />
        </div>
        <div className="col-md-6">
          <label htmlFor={`${formIdPrefix}-email`} className="form-label small">{t('contact.email')} *</label>
          <input id={`${formIdPrefix}-email`} type="email" name="from_email" className="form-control rounded-4" value={data.email} onChange={handleChange('email')} required />
        </div>
        <div className="col-12">
          <label htmlFor={`${formIdPrefix}-phone`} className="form-label small">{t('contact.phone')} *</label>
          <input id={`${formIdPrefix}-phone`} type="tel" name="phone" className="form-control rounded-4" value={data.phone} onChange={handleChange('phone')} required />
        </div>
        <div className="col-md-6">
          <label htmlFor={`${formIdPrefix}-arrival`} className="form-label small">{t('contact.arrival')} *</label>
          <input id={`${formIdPrefix}-arrival`} type="date" name="arrival_date" className="form-control rounded-4" value={data.arrivalDate} onChange={handleChange('arrivalDate')} required />
        </div>
        <div className="col-md-6">
          <label htmlFor={`${formIdPrefix}-departure`} className="form-label small">{t('contact.departure')} *</label>
          <input id={`${formIdPrefix}-departure`} type="date" name="departure_date" className="form-control rounded-4" value={data.departureDate} onChange={handleChange('departureDate')} required />
        </div>
        <div className="col-12">
          <label htmlFor={`${formIdPrefix}-guests`} className="form-label small">{t('contact.guests')} *</label>
          <input id={`${formIdPrefix}-guests`} type="text" name="number_of_people" className="form-control rounded-4" value={data.numberOfPeople} onChange={handleChange('numberOfPeople')} required />
        </div>
        <div className="col-12">
          <label htmlFor={`${formIdPrefix}-notes`} className="form-label small">{t('contact.notes')}</label>
          <textarea id={`${formIdPrefix}-notes`} name="notes" className="form-control rounded-4" rows={2} value={data.notes} onChange={handleChange('notes')} />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input id={`${formIdPrefix}-gdpr`} type="checkbox" name="gdpr_consent" className="form-check-input rounded" checked={data.gdprConsent} onChange={handleChange('gdprConsent')} required />
            <label className="form-check-label small" htmlFor={`${formIdPrefix}-gdpr`}>{t('contact.gdpr')}</label>
          </div>
        </div>
      </div>
      {status === 'success' && <div className="alert alert-success rounded-4 mb-0 small">{t('contact.success')}</div>}
      {status === 'error' && errorMessage && <div className="alert alert-danger rounded-4 mb-0 small">{errorMessage}</div>}
      <button type="submit" className="btn btn-primary rounded-4" disabled={status === 'sending'}>
        {status === 'sending' ? t('contact.sending') : t('contact.send')}
      </button>
    </form>
  );
}

export { BOOKING_EMAIL };
