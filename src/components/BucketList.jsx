import { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {

    // TODO: Write logic to add the new bucket item to the bucket state variable

    // Add the new item to the existing bucket state
    setBucket((prevBucket) => [...prevBucket, item]);

  };

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedBucket = bucket.map((item) => {

      // TODO: Write logic that marks an item as complete or incomplete when invoked
      if (item.id === id) {
        // Toggle the completed status of the matching item
        return { ...item, completed: !item.completed };
      }
      return item; // Return other items unchanged
    });

    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id, newValue) => {


    // TODO: Write logic that will return an array of items that don't contain the ID passed to this function
    const updatedBucket = bucket.filter((item) => item.id !== id);

    // TODO: Update the bucket state variable
    setBucket(updatedBucket);
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue || (newValue.text === undefined && !newValue.text.trim())) {
      console.warn("Entering edit mode for item with empty text");
    } else {


      console.log("Updating item with new value:", newValue);

      // We use the "prev" argument provided with the useState hook to map through our list of items
      // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
      setBucket((prev) =>
        prev.map((item) => (item.id === itemId ? newValue : item))
      );
    }
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      ></Bucket>
    </div>
  );
}

export default BucketList;
