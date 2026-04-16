import "../index.css";

export default function Card() {
  return (
    <div className="card">
      <img
        src="https://www.bing.com/images/search?view=detailV2&ccid=bjrpr9pf&id=BAEB92FC542C7A4C6AA518B073F8E6235F0CFB7B&thid=OIP.bjrpr9pf3le5TCfBi1wg9gHaHa&mediaurl=https%3a%2f%2fimg.freepik.com%2fpremium-photo%2frandom-image_590832-9941.jpg&exph=626&expw=626&q=random+image&FORM=IRPRST&ck=B006476EF25C5CB2FB28332C768BDBD3&selectedIndex=7&itb=0"
        alt="card"
        className="card-img"
      />

      <div className="card-content">
        <h2>Card Title</h2>
        <p>This is Simple Card.</p>
        <button>Read More</button>
      </div>
    </div>
  );
}
