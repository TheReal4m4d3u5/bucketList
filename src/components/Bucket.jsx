import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {

    // TODO: Write logic to call the editBucketItem prop with the supplied values
    
    //editBucketItem prop with the supplied value
    editBucketItem(value);


    // TODO: Set the key:value pairs in the `edit` object back to empty strings
    setEdit({ id: null, text: '' }); 


  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    // TODO: Add a className of `bucket-row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // TODO: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator



    // bucket-row is a CSS class name that you would typically define in your stylesheet to style each item in the bucket list. 
    // The purpose of bucket-row is to provide a base styling for each row in the list, such as layout, padding, margin, background color, 
    // or other styling properties that make each item visually consistent.
    // The className in this line is a combination of three possible classes:
   
    // bucket-row: A base class for styling each item (or row) in the bucket list. This could include general styles that apply to all items 
    // regardless of their completion status.
    
    // complete (Conditional): This class is added only if the item is marked as completed (item.completed is true). 
    // You might define this class in your CSS to add styles like a strikethrough, different color, or faded text for completed items.


    <div className={`bucket-row ${item.completed ? `complete ${item.eagerness}` : item.eagerness}`} key={index}>

      {/* TODO: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument */}
      <div key={index} onClick={() => props.completeBucketItem(item.id)}>
          {/* TODO: Add the item text here */}
          {item.text}
      </div>

      <div className="icons">
        {/* TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties */}
        <p onClick={() => props.editBucketItem(item.id, { text: item.text, eagerness: item.eagerness })}> ✏️</p>
        
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
