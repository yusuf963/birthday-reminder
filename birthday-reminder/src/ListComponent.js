import React from 'react'

const List = ({ peopleList }) => {
  return (
    <>
      {peopleList.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List