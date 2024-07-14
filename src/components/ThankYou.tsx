import thankYouIcon from "../assets/images/icon-thank-you.svg";
import "../styles/thankYou.scss";

const ThankYou = () => {
  return (
    <div className="thankyou">
      <div className="thankyou__content">
        <img src={thankYouIcon} alt="" aria-hidden className="thankyou__icon" />
        <p className="thankyou__title">Thank you!</p>
        <p className="thankyou__body">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at suppert@loremgaming.com.
        </p>{" "}
      </div>
    </div>
  );
};

export default ThankYou;
