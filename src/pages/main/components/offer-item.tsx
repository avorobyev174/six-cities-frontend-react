import { Offer, OfferItemClassOptions } from '../../../types/offer.ts';
import { capitalizeFirstLetter } from '../../../utils.ts';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../../const.ts';

type OfferItemProps = {
  offer: Offer;
  onOfferHoverHandler?: (id: string) => void;
  classOptions: OfferItemClassOptions;
}

export default function OfferItem({ offer, onOfferHoverHandler, classOptions }: OfferItemProps) {
  const {
    placeCardClass,
    placeCardImageWrapperClass,
    imageWith,
    imageHeight,
    placeCardInfoClass,
    placeCardBookmarkButtonClass,
  } = classOptions;
  const {
    id,
    previewImage,
    isPremium,
    price,
    title,
    type,
    rating,
  } = offer;
  const offerOnMouseOverHandler = onOfferHoverHandler
    ? () => onOfferHoverHandler(id)
    : () => undefined;
  return (
    <article
      className={ `${ placeCardClass } place-card` }
      onMouseOver={ offerOnMouseOverHandler }
    >
      { isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div> }
      <div className={ `${ placeCardImageWrapperClass } place-card__image-wrapper` }>
        <a href="#">
          <img
            className="place-card__image"
            src={ previewImage }
            width={ imageWith }
            height={ imageHeight }
            alt={ type }
          />
        </a>
      </div>
      <div className={ `place-card__info ${ placeCardInfoClass }` }>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={ `place-card__bookmark-button button ${ placeCardBookmarkButtonClass }` } type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ rating * 20 }%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ `${ AppRoute.Offer.slice(0, -3) }${ id }` }>{ title }</Link>
        </h2>
        <p className="place-card__type">{ capitalizeFirstLetter(type) }</p>
      </div>
    </article>
  );
}