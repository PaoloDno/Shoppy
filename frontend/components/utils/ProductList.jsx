import React from 'react';

const ProductListings = ({ ProductList }) => {

  return (
    <div className='menulist-section flex-center'>
      <div className='menu-item-list'>
       {/*} {ProductList.map((List) => {
          return (
            <article key={id} className='menu-item-card'>
              <p>{List.name}</p>
            </article>
          );
        })} */}
      </div>
    </div>
  );
};

export default ProductListings;