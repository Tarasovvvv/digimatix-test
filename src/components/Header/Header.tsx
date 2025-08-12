import { PlayIcon, TicketIcon } from '@/components/icons';
import { Button } from '@/components/ui';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.moon}>
        <img src='/images/header/Moon.webp' />
      </div>
      <div className={styles.header__top}>
        <img src='/images/header/Logo.webp' className={styles.logo} />
        <Button size='small' className={styles.ticketButton}>
          <span>Закажите ваш билет</span>
        </Button>
        <Button className={styles.mobileTicketButton}>
          <TicketIcon />
        </Button>
      </div>
      <div className={styles.header__body}>
        <h2>До&nbsp;луны и&nbsp;обратно</h2>
        <p>
          Задача организации, в&nbsp;особенности&nbsp;же курс на&nbsp;социально-ориентированный национальный проект
          позволяет оценить значение модели развития.
        </p>
        <div className={styles.buttonContainer}>
          <Button>
            <span>Подробнее о нас</span>
          </Button>
          <Button variant='secondary' rounded>
            <PlayIcon />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
