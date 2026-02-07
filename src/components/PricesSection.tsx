import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BookingForm, { BOOKING_EMAIL } from './BookingForm';

type TableRow = { capacity?: string; price?: string; action?: string; time?: string; timing?: string; refund?: string };

export default function PricesSection() {
  const { t } = useTranslation();
  const holidayHouseRows = t('prices.holidayHouseRows', { returnObjects: true }) as TableRow[];
  const apartmentRows = t('prices.apartmentRows', { returnObjects: true }) as TableRow[];
  const importantNotes = t('prices.importantNotes', { returnObjects: true }) as string[];
  const checkInOutRows = t('prices.checkInOutRows', { returnObjects: true }) as TableRow[];
  const cancellationRows = t('prices.cancellationRows', { returnObjects: true }) as TableRow[];

  return (
    <section id="prices" className="py-5 bg-white">
      <div className="container">
        <motion.h2
          className="text-center mb-4 fw-bold"
          style={{ color: 'var(--color-forest-800)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('prices.title')}
        </motion.h2>
        <div className="row g-4">
          {/* Left card: Prices */}
          <motion.div
            className="col-12 col-lg-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card border-0 shadow rounded-4 h-100 overflow-hidden">
              <div className="card-body p-4">
                <h3 className="h5 mb-3" style={{ color: 'var(--color-forest-700)' }}>{t('prices.holidayHouseTitle')}</h3>
                <div className="table-responsive small mb-4">
                  <table className="table table-sm table-borderless text-body-secondary">
                    <thead>
                      <tr>
                        <th>{t('prices.capacity')}</th>
                        <th className="text-end">{t('prices.pricePerNight')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(holidayHouseRows) && holidayHouseRows.map((row, i) => (
                        <tr key={i}>
                          <td>{row.capacity}</td>
                          <td className="text-end">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="h5 mb-3" style={{ color: 'var(--color-forest-700)' }}>{t('prices.apartmentTitle')}</h3>
                <div className="table-responsive small mb-4">
                  <table className="table table-sm table-borderless text-body-secondary">
                    <thead>
                      <tr>
                        <th>{t('prices.capacity')}</th>
                        <th className="text-end">{t('prices.pricePerNight')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(apartmentRows) && apartmentRows.map((row, i) => (
                        <tr key={i}>
                          <td>{row.capacity}</td>
                          <td className="text-end">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h4 className="h6 mb-2" style={{ color: 'var(--color-forest-700)' }}>{t('prices.importantNotesTitle')}</h4>
                <ul className="list-unstyled small text-body-secondary mb-4">
                  {Array.isArray(importantNotes) && importantNotes.map((note, i) => (
                    <li key={i} className="mb-1">• {note}</li>
                  ))}
                </ul>

                <h4 className="h6 mb-2" style={{ color: 'var(--color-forest-700)' }}>{t('prices.checkInOutTitle')}</h4>
                <div className="table-responsive small mb-4">
                  <table className="table table-sm table-borderless text-body-secondary">
                    <thead>
                      <tr>
                        <th>{t('prices.action')}</th>
                        <th className="text-end">{t('prices.time')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(checkInOutRows) && checkInOutRows.map((row, i) => (
                        <tr key={i}>
                          <td>{row.action}</td>
                          <td className="text-end">{row.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h4 className="h6 mb-2" style={{ color: 'var(--color-forest-700)' }}>{t('prices.cancellationTitle')}</h4>
                <div className="table-responsive small mb-3">
                  <table className="table table-sm table-borderless text-body-secondary">
                    <thead>
                      <tr>
                        <th>{t('prices.timing')}</th>
                        <th className="text-end">{t('prices.refund')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(cancellationRows) && cancellationRows.map((row, i) => (
                        <tr key={i}>
                          <td>{row.timing}</td>
                          <td className="text-end">{row.refund}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="small text-body-secondary mb-0">{t('prices.deposit')}</p>
              </div>
            </div>
          </motion.div>

          {/* Right card: Booking Form */}
          <motion.div
            className="col-12 col-lg-6"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card border-0 shadow rounded-4 h-100 overflow-hidden">
              <div className="card-body p-4">
                <h3 className="h5 mb-3" style={{ color: 'var(--color-forest-700)' }}>{t('prices.bookingFormTitle')}</h3>
                <BookingForm formIdPrefix="prices-booking" />
                {/* <p className="small text-body-secondary mt-3 mb-0">
                  {t('prices.submitTo')} <a href={`mailto:${BOOKING_EMAIL}`} className="text-decoration-none" style={{ color: 'var(--color-forest-600)' }}>{BOOKING_EMAIL}</a>
                </p> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
