import React from "react";
import './login-form.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <form action="/examples/actions/confirmation.php" method="post">
        <h4 className="text-center">Войти</h4>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Вход</button>
        </div>
        <div className="clearfix">
            <label className="pull-left checkbox-inline"><input type="checkbox"/> Запомнить меня</label>
            <a href="#" className="pull-right">Забыли пароль?</a>
        </div>   
      </form>
    </div>
  );
}
export default LoginForm;
