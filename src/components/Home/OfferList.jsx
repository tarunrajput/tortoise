import OfferCard from './OfferCard';

export default function OfferList({ data = [] }) {
  return (
    data.map(offer => <OfferCard key={offer.id} {...offer} />)
  )
}