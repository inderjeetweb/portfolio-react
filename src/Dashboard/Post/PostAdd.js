import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const PostAdd = () => {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "posts");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newCategoryId, setNewCategoryId] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
      getUsers();
    });

  const createPost = async () => {
    await addDoc(userCollectionRef, {
      postTitle: newPostTitle,
      content: newContent,
      categoryId: newCategoryId,
    });
  };


  return (
    <>
      <h2>Add New Post</h2>
      
      <div className='postOuter'>
          <input type="text" placeholder='Title' onChange={(e) => setNewPostTitle(e.target.value)} className='form-control' name="heading" />
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              // console.log({ event, editor, data });
              setNewContent(data)
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
          <button onClick={createPost} className="btn btn-lg mt-3 pull-right btn-primary">Submit</button>
      </div>
    </>
  )
}
