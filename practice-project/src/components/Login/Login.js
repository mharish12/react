import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/input/Input';

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const ctx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const emailReducer = (state, action) => {
    console.log('emailReducer: ', state, action);
    let returnVal = {};
    if (action.type === 'USER_INPUT') {
      returnVal = {
        value: action.val !== undefined ? action.val : '',
        isValid:
          action.val !== undefined && action.val !== null
            ? action.val.includes('@')
            : false,
      };
    } else if (action.type === 'INPUT_BLUR') {
      returnVal = {
        value: state.val,
        isValid:
          action.val !== undefined && action.val !== null
            ? action.val.includes('@')
            : false,
      };
    } else {
      returnVal = { value: '', isValid: false };
    }
    // console.log('returnVal: ', returnVal);
    return returnVal;
  };

  const passwordReducer = (state, action) => {
    console.log('passwordReducer', state, action);
    if (action.type === 'USER_INPUT') {
      return {
        value: action.val,
        isValid:
          action.val !== null && action.val !== undefined
            ? action.val.trim().length > 6
            : false,
      };
    }
    if (action.type === 'INPUT_BLUR') {
      return {
        value: state.value,
        isValid:
          action.val !== null && action.val !== undefined
            ? action.val.trim().length > 6
            : false,
      };
    }
    return { value: '', isValid: false };
  };

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  // useEffect(() => {
  //   console.log("EFFECT RUNNING");

  //   return () => {
  //     console.log("EFFECT CLEANUP");
  //   };
  // }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const validateEmailHandler = (event) => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: 'INPUT_BLUR', val: event.target.value });
  };

  const validatePasswordHandler = (event) => {
    // setPasswordIsValid(passwordState.isValid);
    dispatchPassword({ type: 'INPUT_BLUR', val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          type="email"
          label="E-Mail"
          value={emailState.value}
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          value={passwordState.value}
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
