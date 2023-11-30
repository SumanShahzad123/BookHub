import React, { useState } from 'react'
import { Button, Checkbox, Textarea, Label, TextInput } from 'flowbite-react';

const UploadBook = () => {
  const bookCatergories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "Romance",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Biography",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ]
  const [selectedBookCaterogy, setSelectedBookCaterogy] = useState(bookCatergories[0]);
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCaterogy(event.target.value);
  }

  //handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookServerDescription = form.bookServerDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle, authorName, imageURL, category, bookServerDescription, bookPDFURL
    }
    console.log(bookObj);


    //send to db

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    }).then(res => res.json()).then(data => {
      console.log(data);
      alert("Book uploaded successfully!!!")
      form.reset();
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

        {/* 1st row*/}
        <div className='flex gap-8'>

          {/* for title*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="bookTitle"
                value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name='bookTitle'
              placeholder="Book name"
              required
              type="text" />
          </div>

          {/* for author name*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name='authorName'
              placeholder="Author name"
              required
              type="text" />
          </div>
        </div>

        {/* 2nd row*/}
        <div className='flex gap-8'>

          {/* for image URL*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="imageURL"
                value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name='imageURL'
              placeholder="Book Image URL"
              required
              type="text" />
          </div>

          {/* for category*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="inputState"
                value="Book Catergory" />
            </div>
            <select id='inputState' name='category' className='w-full rounded' value={selectedBookCaterogy}
              onChange={handleChangeSelectedValue}>
              {
                bookCatergories.map((option,index) => <option key={index} value={option}>{option}</option>)
              }
            </select>
          </div>
        </div>

        {/* book description*/}
        <div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="bookServerDescription"
                value="Book Description" />
            </div>
            <Textarea
              id="bookServerDescription"
              name='bookServerDescription'
              placeholder="Write your book discription..."
              required
              className='w-full'
              rows={6} />
          </div>
        </div>

        {/* book pdf link*/}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label
              htmlFor="bookPDFURL"
              value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name='bookPDFURL'
            placeholder="Book PDF URL"
            required
            type="text" />
        </div>
        <Button type="submit " className='mt-5'>Upload Book</Button>
      </form >
    </div >
  )
}

export default UploadBook