import { useRef, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import classes from './NewCommentForm.module.css';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import '../../index.css';
import LoadingSpinner from '../UI/LoadingSpinner';
const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);
  const {onAddedComment} = props;
  const Params = useParams();

  useEffect(() => {
    if (status === 'completed' && !error) {
      sendRequest();
    }
  }, [sendRequest,onAddedComment,error]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;
    // optional: Could validate here

    // send comment to server
    sendRequest();
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' &&
        <div className='centered'>
          <LoadingSpinner />
        </div>
      }
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;