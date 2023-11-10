import stylesLogo from './Logo.module.css';
import logo from '../../../assets/SMS/SMS.png';

export default function imgLogo() {
  return (
    <div className={stylesLogo.DivLogo}>
      <img src={logo} alt="LogoSMS" />
    </div>
  );
}