import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useCallback, useRef, useState } from 'react';
import Tab from './Tab/Tab';
import { sliders } from './slides';
import styles from './WithUsSection.module.scss';
import { ArrowIcon } from '../icons';

const WithUsSection = () => {
  const [{ id: sliderId, slides }, setSlider] = useState(sliders[0]);

  const swiperRef = useRef<SwiperRef>(null);

  const handleSwitchTab = useCallback(
    (tabIndex: number) => {
      if (tabIndex === sliderId) return;

      const newSlider = sliders.find((slide) => slide.id === tabIndex);
      if (newSlider) {
        setSlider(newSlider);
        swiperRef?.current?.swiper.slideTo(0);
      }
    },
    [sliderId],
  );

  return (
    <section className={styles['with-us-section']}>
      <h2>Вы с&nbsp;нами?</h2>
      <div className={styles.navbar}>
        <div className={styles.navbar__tabs}>
          {sliders.map(({ id, tabTitle }) => (
            <Tab
              key={id}
              variant={id === sliderId ? 'active' : 'inactive'}
              title={tabTitle}
              onClick={() => handleSwitchTab(id)}
            />
          ))}
        </div>
        <div className={styles['navbar__button-container']}>
          <button id='swiper-prev-el-button'>
            <ArrowIcon />
          </button>
          <button id='swiper-next-el-button'>
            <ArrowIcon rotated />
          </button>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        className={styles.swiper}
        modules={[Navigation, Pagination]}
        spaceBetween={64}
        loop={false}
        breakpoints={{
          1400: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 3,
          },
          655: {
            slidesPerView: 2,
          },
          376: {
            slidesPerView: 1,
          },
        }}
        navigation={{
          prevEl: '#swiper-prev-el-button',
          nextEl: '#swiper-next-el-button',
        }}
        pagination={{
          el: `.${styles.pagination}`,
          clickable: true,
          bulletClass: styles.pagination__bullet,
          bulletActiveClass: styles['pagination__bullet--active'],
        }}
      >
        {slides.map(({ id, imageUrl, title, description }) => (
          <SwiperSlide key={id} className={styles['swiper-slide']}>
            <img src={imageUrl} alt={`Предложение "${title}"`} loading='lazy' />
            <h3>{title}</h3>
            <p>{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.pagination} />
    </section>
  );
};

export default WithUsSection;
