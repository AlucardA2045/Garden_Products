import "./_ModaleWindow.scss";

const ModaleWindow = ({ setModalVisible }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <span className="close" onClick={() => setModalVisible(false)}>
            &times;
          </span>
          <h3>Congratulations!</h3>
        </div>
        <p>Your order has been successfully placed on the website.</p>
        <p>A manager will contact you shortly to confirm your order.</p>
      </div>
    </div>
  );
};

export default ModaleWindow;
