import { MdExtension, MdFavorite, MdExplore } from "react-icons/md";

export const pricingData = [
    {
        icon: <MdExtension className="pricing-card__info-icon" />,
        plan: 'Basic',
        price: 'Free',
        recurrence: 'per month',
        transaction: '100 Transactions',
        cashBack: '2% Cash Back',
        limit: '$10000 Limit',
        btnStyle: ['btn-outline--white', 'btn-outline--darkblue'],
        btnSize: ['btn--medium', 'btn--mobile'],
        id: 1,
        highlight: false,
    },
    {
        icon: <MdFavorite className="pricing-card__info-icon" />,
        plan: 'Standard',
        price: '$9.99',
        recurrence: 'per month',
        transaction: '1000 Transactions',
        cashBack: '3% Cash Back',
        limit: '$100000 Limit',
        btnStyle: ['btn-outline--white', 'btn-outline--darkblue'],
        btnSize: ['btn--medium', 'btn--mobile'],
        id: 2,
        highlight: true,
    },
    {
        icon: <MdExplore className="pricing-card__info-icon" />,
        plan: 'Premium',
        price: '$19.99',
        recurrence: 'per month',
        transaction: 'Unlimited Transactions',
        cashBack: '4% Cash Back',
        limit: 'No Limit',
        btnStyle: ['btn-outline--white', 'btn-outline--darkblue'],
        btnSize: ['btn--medium', 'btn--mobile'],
        id: 3,
        highlight: false,
    },
];