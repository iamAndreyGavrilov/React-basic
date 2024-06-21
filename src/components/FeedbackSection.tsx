import Button from './Button/Button';
import { useState } from 'react';

export default function FeedbackSection() {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('Offer');
  const [hasError, setHasError] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }

  function handleReasonChange(event) {
    setReason(event.target.value);
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor="name">Ваше Имя</label>
        <input
          id="name"
          type="text"
          className="control"
          value={name}
          onChange={handleNameChange}
          style={{
            border: hasError ? '2px solid red' : '2px solid green',
          }}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select id="reason" className="control" value={reason} onChange={handleReasonChange}>
          <option value="Complaint">Жалоба</option>
          <option value="Offer">Предложение</option>
          <option value="Comment">Замечание</option>
        </select>

        <Button isActive={!hasError} disabled={hasError}>
          Отправить
        </Button>
      </form>
    </section>
  );
}
