import React from 'react';
import Banner from './shared/Banner';
import CardSection from './shared/CardSection';

const page = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <CardSection></CardSection>
            </div>
        </div>
    );
};

export default page;