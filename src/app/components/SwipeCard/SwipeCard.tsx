'use client'

import { CardData, CardEvent, CardEnterEvent, CardSwiper } from 'react-card-swiper';

// Define your card data
const mockData: CardData[] = [
    { id: '12345678', meta: { apk: 'another-apk.apk' }, src: 'https://source.unsplash.com/random/1000x1000/?puzzle', content: <div>Content</div> },
    { id: '23456789', meta: { apk: 'yet-another-apk.apk' }, src: 'https://source.unsplash.com/random/1000x1000/?adventure', content: <div>Content</div> },
];

// Implement your component using SwipeCard
export default function SwipeSelectionPage() {
    // Define event handlers
    const handleDismiss: CardEvent = (el, meta, id, action, operation) => {
        console.log({ el, meta, id, action, operation }); // Handle event data
    };

    const handleFinish = (status: string) => {
        console.log(status); // 'finished'
    };

    const handleEnter: CardEnterEvent = (el, meta, id) => {
        console.log(el, meta, id);
    };

    // Render SwipeCard component with desired props
    return (
        <CardSwiper
            data={mockData}
            onEnter={handleEnter}
            onFinish={handleFinish}
            onDismiss={handleDismiss}
            dislikeButton={<div>Left</div>}
            likeButton={<div>Right</div>}
            withActionButtons
            withRibbons
            likeRibbonText="INSTALL"
            dislikeRibbonText="PASS"
            ribbonColors={{ bgLike: 'green', bgDislike: 'red', textColor: 'white' }}
            emptyState={<div>Empty</div>} // Replace with your custom empty state
        />
    );
}