import React from 'react';

const TrendsKeyword = () => {
    const [state, setState] = React.useState([
        {
            id: 1,
            country: 'Trend in India',
            keyword: 'ISPR',
            totalkeywords: '2000k'
        },
        {
            id: 2,
            country: 'Trend in India',
            keyword: 'Aayush',
            totalkeywords: '2000k'
        },
        {
            id: 3,
            country: 'Trend in India',
            keyword: 'YoutubeinIndian',
            totalkeywords: '2000k'
        }
    ])
    return (
        <div className='keywords'>
            <div className='key'>
                <div className='keyword__heading'>
                    <h4>Trend for you</h4>
                </div>
                {state.map(keyword => (
                    <div key={keyword.id}>
                        <div className='country'>{keyword.country} </div>
                <div className='keyword__name'>
                    <strong>{keyword.keyword}</strong>
                </div>
                <div className='keyword__tweets'>
                    {keyword.totalkeywords}
                </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default TrendsKeyword;
