import { Button } from '@/components/ui';
import FloatingLabelInput from './FloatingLabelInput/FloatingLabelInput';
import styles from './QuestionSection.module.scss';

const QuestionSection = () => {
  return (
    <section className={styles['question-section']}>
      <h2>Остались вопросы?</h2>
      {window.innerWidth > 691 ? (
        <p>
          Задача организации, в&nbsp;особенности&nbsp;же курс на социально-ориентированный национальный проект
          позволяет оценить значение модели развития.
        </p>
      ) : (
        <p>
          Задача организации, в&nbsp;особенности&nbsp;же курс на социально-ориентированный национальный проект позволяет
          оценить значение модели развития.
        </p>
      )}
      <form className={styles.form} action=''>
        <FloatingLabelInput type='text' labelText='Имя' placeholder='Имя Фамилия' required />
        <FloatingLabelInput type='tel' labelText='Телефон' placeholder='+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9' />
        <FloatingLabelInput type='email' labelText='Email' placeholder='Email' required />
        <Button type='submit' variant='secondary' size='large' className={styles['submit-button']}>
          Отправить
        </Button>
      </form>
    </section>
  );
};

export default QuestionSection;
