import React from 'react'

const MenuCard = ({menuData}) => {
    return (
        <>
            <section className='main-card--container'>
        {
            menuData.map((currEle)=>{
                return (
                    
                    <div className='card-container' key={currEle.id}>
                    <div className='card'>
                        <div className='card-body'>
                            <span className='card-number card-circle subtle'>{currEle.id}</span>
                            <span className='card-author subtle'>{currEle.category}</span>
                            <h2 className='card-title'>{ currEle.name }</h2>
                            <span className='card-description subtle'>To prepare this mouth-watering snack recipe, put a deep-bottomed pan over medium flame and add water in it and bring it to a boil. Meanwhile, take a chopping board and finely chop onion, capsicum, tomato and green chilli on it. Once the water begins to boil, add Maggi masala noodles and peas to it. Let it cook till the noodles and peas are soft and tender.</span>

                        <div className='card-read'>Read</div>
                        </div>

                        <img src={currEle.image} alt="images" className='card-media' />
                        <span className='card-tag subtle'>Order Now</span>
                    </div>
                </div>
                )
            })
                }
        </section>
      </>

  )
}

export default MenuCard
