import { getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';

export const PostList = () => {
  const userCollectionRef = collection(db, "posts");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(posts)
    };
      getUsers();
    });

  return (
    <>

      <div className='col-12 col-sm-6'>
          <h2 className='mt-0'>List of post</h2>
      </div>
   
      <div className='col-12 col-sm-6 text-right'>
            <Link to="/dashboard/post">
              <button type="button" className="btn btn-lg btn-primary btn-dashboard-custom">
                {/* <i className="fa fa-plus" aria-hidden="true"></i>  */}
                +
                 Add New</button>
            </Link>
      </div>
   
      
      <table className="table caption-top">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Created At</th>
            <th scope="col">Created By</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map((post, index)=>{
              return (
                <tr>
                  <th scope="row">{index+1}</th>
                  {/* <th scope="row">{post.id}</th> */}
                  <td>{post.postTitle}</td>
                  <td>{post.createAt}</td>
                  <td>{post.createdBy}</td>
                  <td><button type="button" className="btn btn-primary btn-dashboard-custom"><i className="fa fa-edit" aria-hidden="true"></i></button></td>
              </tr>
              )
            })
          }
         
        </tbody>
      </table>
    </>
  )
}

