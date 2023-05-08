// import react from "react";
// import { useState } from "react";
// import Modal from "../Modal/Modal";
// export const LibrosCard = ({ book }) => {

//     const [show,setShow]=useState(false);
//     const [bookItem,setItem]=useState();
//     console.log(book)
//     return (
//         <>
//             {
//                 book.map((item) => {
//                     let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
//                     let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
//                     if(thumbnail!= undefined && amount !=undefined)
//                     {
//                         return (
//                             <>
//                             <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
//                                 <img src={thumbnail} alt="" />
//                                 <div className="bottom">
//                                     <h3 className="title">{item.volumeInfo.title}</h3>
//                                     <p className="amount">&#8377;{amount}</p>
//                                 </div>
//                             </div>
//                               <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
//                             </>
//                         )
//                     }
                    
//                 })
//             }

//         </>
//     )
// }
import React, { useState } from "react";
import Modal from "../Modal/Modal";

export const LibrosCard = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(null);

  const handleClick = (item) => {
    setItem(item);
    setShow(true);
  };
console.log(book,'helllllllllllllllllllllo')
  return (
    <>
      {book.map((item) => {
        const thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        const amount =
          item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <div
              className="card"
              key={item.id}
              onClick={() => handleClick(item)}
            >
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="amount">&#8377;{amount}</p>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </>
  );
};
