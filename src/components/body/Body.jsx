import React from "react";
import Clients from "./clients/Clients";
import Products from "./products/Products";
import Contacts from "./contacts/Contacts";
import Teams from "./teams/Teams";
import { BiCheckDouble } from "react-icons/bi";
import { FaRegSmile } from "react-icons/fa";
import { BsJournalBookmark } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { FiAward } from "react-icons/fi";
import "./body.scss";

const apiContent = [
  {
    id: 1,
    title: "تبلیغ سختی است.",
    text: "نتایج یا در نتیجه هر کی از این اهداف اشتغال حاصل می شوند.",
    image: "./assets/cube-solid.svg",
  },
  {
    id: 2,
    title: "کدام یک از اینهاست.",
    text: "کسانی که هوس سیاهان می کنند نمی بینند، آنها مقصر هستند که خدمات خود را رها کرده اند.",
    image: "./assets/image-regular.svg",
  },
  {
    id: 3,
    title: "یا کور شده است.",
    text: "یا می پذیرند یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند.",
    image: "./assets/receipt-solid.svg",
  },
  {
    id: 4,
    title: "حقیقت مبارک.",
    text: "آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند.",
    image: "./assets/shield-halved-solid.svg",
  },
];

const Body = () => {
  return (
    <>
      <div className="company">
        <div className="contain">
          <div className="title">شرکت دیجیتال کاسوکا</div>
          <div className="text">
            <p>
              شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت دیجیتال
              مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی روز و ارایه
              راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب و کارهای داخلی
              نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و با تثبیت نام نوآد
              به عنوان تخصصی ترین برند دیجیتال مارکتینگ در ایران و گسترش نام آن
              در بازارهای جهانی به صادرات خدمات مبتنی بر تکنولوژی های نوین گام
              بردارد. نوآد پیشرفت خود در طول یک دهه فعالیت را مرهون شفافیت،
              انسجام و پایبندی به نتایج پیش بینی شده مشتریان خود می داند. سرمایه
              گذاری روی تکنولوژی های نوین، کیفیت و نوآوری، پایبندی به تعهدات،
              رضایتمندی و وفاداری مشتریان، نیروی انسانی متمرکز و پویا از ارزش
              های ذاتی نوآد می باشند. فضای دیجیتال تحول شگرف در ارتباطات و نحوه
              تعامل مردم با یکدیگر بوجود آورده است. ابزارها و پلتفرم های بوجود
              آمده در این عصر، قدرت چانه زنی و انتخاب را برای مردم افزایش داده و
              موجب سهولت در ارزیابی و مقایسه برندها و محصولات مختلف گردیده است.
              ما این تغییر نگرش در انتخاب یک برند و محصول را نوعی فرصت برای خود
              و مشتریانمان به حساب می آوریم. در فضای دیجیتال به راحتی می توان
              بازار هدف را شناسایی، نیازها، خواسته ها و علایق آنها را کشف و با
              استفاده از اطلاعاتی که بدست می آید به خلق و توسعه محصولات، برند و
              تجربیات مناسب که از ادغام تکنولوژی و خلاقیت در کنار متد بازاریابی
              نوین ناشی میشود، اقدام کرد. در نوآد ما آماده پذیرفتن چالش های جدید
              هستیم و با هر قیمت که شده به تعهدات خود پایبند می مانیم.
            </p>
            <ul>
              <li>
                <i>
                  <BiCheckDouble />
                </i>
                <span>
                  ۱۰ سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای
                  نوین بازاریابی
                </span>
              </li>
              <li>
                <i>
                  <BiCheckDouble />
                </i>
                <span>
                  تمرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال برندینگ
                  و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های
                  برندینگ و بازاریابی شما می باشد.
                </span>
              </li>
              <li>
                <i>
                  <BiCheckDouble />
                </i>
                <span>
                  برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال
                  مارکتینگ ثبت نام کنید.
                </span>
              </li>
            </ul>
            <p>
              خدمات نوآد در جهت یکپارچه سازی تمامی فعالیت های یک کسب و کار از
              مرحله ورود به بازار، ساخت، گسترش و ایجاد تصویری یکپاچه از برند،
              دیجیتال مارکتینگ، افزایش مزیت رقابتی و سهم بازار تا مراحل پس از
              فروش و ایجاد وفاداری در مشتریان یک برند ارایه می گردد.
            </p>
          </div>
        </div>
        <img src="./assets/about.jpg" alt="about company" className="about" />
      </div>
      <Clients />
      <div className="company">
        <div className="contain">
          <div className="features">
            <img
              src="./assets/features.jpg"
              alt="features"
              className="feature"
            />
            <ul className="ul-content">
              {apiContent.map((item) => (
                <li key={item.id} className="li-content">
                  <img src={item.image} alt={item.id} className="images" />
                  <div className="text2">
                    <p>{item.title}</p>
                    <span>{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Products />
      <div className="best">
        <div className="leftPart">
          <h1>شایسته ترین لذت را به هر حال ارائه می دهد</h1>
          <p>
            خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من
            به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد
            مقصر است
          </p>
          <ul>
            <li>
              <div className="titr">
                <FaRegSmile />
                <p>65</p>
              </div>
              <span>
                مشتریان خوشحال خوشحالیم که
                <br />
                از معمار چیزی دریافت کنیم.
              </span>
            </li>
            <li>
              <div className="titr">
                <BsJournalBookmark />
                <p>85</p>
              </div>
              <span>
                پروژه ها برای بدست آوردن و زمانی که او
                <br />
                کل کسانی را که از او تعریف می کنند
                <br />
                رد می کند و آنها را حقیر می شمارد
              </span>
            </li>
            <li>
              <div className="titr">
                <FaRegClock />
                <p>35</p>
              </div>
              <span>
                سال ها تجربه یا اجازه دهید به
                <br />
                دنبال نوعی مزیت باشد
              </span>
            </li>
            <li>
              <div className="titr">
                <FiAward />
                <p>20</p>
              </div>
              <span>
                جوایز درد دردناک تر است در زمانی دیگر که
                <br />
                هیچکس او را متهم نمی کند و
                <br />
                هیچ وقت او را متهم نمی کند
              </span>
            </li>
          </ul>
        </div>
        <div className="rightPart">
          <img src="./assets/counts-img.jpg" alt="counts img" />
        </div>
      </div>
      <div className="effectPart">
        <div className="content">
        <div className="circle"></div>
          <h1 className="name">سارا ویلسون</h1>
          <span className="position">طراح</span>
          <p className="desription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            ut. Consequuntur odit eum maiores consectetur repudiandae
            dignissimos culpa mollitia cumque.
          </p>
        </div>
      </div>
      <Teams />
      <Contacts />
    </>
  );
};

export default Body;
