/* eslint-disable react/jsx-no-undef */
import "./Header.css";
import { Search } from "@mui/icons-material";
import HeaderOption from "./HeaderOptions";
import { Home } from "@mui/icons-material";
import { SupervisorAccount } from "@mui/icons-material";
import { BusinessCenter } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACbCAMAAABCvxm+AAAAb1BMVEUAd7f///8AdbYAa7Lc6vO0zeKgxd8Ac7UyhL0Ab7Ph7vaJsNMvh8C91uhGisDz9/odg77U5vGoyeFQnMs0j8QRfrtjnsrD2+vs9PlRl8ePvNt/s9VanMq21ulEkcSVu9l0qM+kwNxqm8l1octalMUmhhXvAAAE4ElEQVR4nO2c25ajKhCGoTQitsZgi5qTcfbu93/G0XTSMdFCjD3CBf/FpNca1E8ORVWBEHpTKrLPXAIxKZD5ZybSOxK5/SYF8Rgzi9bCMeaRInliEwVnhrEeYrwQD7Yy5qaBnsTj8s5WSnsq7VtMlt9sIrYNrYWLxZWtsA+thSs6tsSuvnYXTyhJray2ruJSIkxDoBIk80wzIPIy8mlnk7aN+klya9lyYnh6xwWS2IpGNMiAANj5AowzKUPZ/lqG1/pz9SU4lyI5B41kNg0aHl78Hx+URsneuOt5F/OaiD6pyogdUy/blXSg9GRDu179pxG4xnzNsdofQ2t1BMOdDshIg9463d5ws8IBQ2vHq9lJDuoKZ6MXo13OOyvQaLU1WHFAVGhmK443arbInKcMDB2kN5lzRyGOJtgOxhqVfalGaac/5tj+SyfYAmNtyiaGAqUbY34w+3+KLTNm4NjXVJsa7G+T4/RizMABjLpuPRl0RbjCC+lUGcygwE7NFpjM7njKScuoH0LYSTVSM6P+G0CmqDbDyR2VGTmaDgPZHoM7mI6zOrhxZySwIe/AtyMWOD3agNYlHYKXqkvLvS2ZLkb2Wd+WiGZnehg8BIzL06YUUeWL5BCCPWSdABgjMtyGknHz43Moe/O9TmYFXddtBaz9a3kP6W4H17ux++/wrtD/7+9/Bua5YyK7vK73RbGv83hHuoJLyJjcDhS+5PGBhcNCW9IvBJyF+0NWiqq6Gsu0ikQSNF/y/Y0VAAeRDiSy+um5YRBVg0JR8lgtbt+wyfwRbzAVl/zNBQsgwbgb4vfyNMAx//j+Bjw84s5WVTbeOy2Le75Zr1CNPba8RhSMnyaiySR8Y4LmF+x2fvhzNzwe8zvfmMVTubJWBzK7Yb0N+tj4h81D2p3SaAeE51Nh7lWb2ftmFrMx3kxlLm4S9Uy4xWz8NJXEe8DNDI6Wssl6KqfSh5vnSiyuN62+dlc2axZbyqZcoBgoPc4JxxeyzVU0x9tfmY0GMxp1bbaq1odbm40G+j1udTaqP1TXZ2u0E47rs+kb4PXZqi9dM7I+Gz1YzJasz5amfnluI5lJj6mSK7NF2X4btj6Q3BbZhNOkvWfnd9jSIL7GytdYF/IJB+BD0/z+Clt1eoqjGD8qG1Z3i8JvsFXFy8OAKRejMk0L9wts6WlQD8AV6xa01PTNf4EtG0l5wE4xIKJQbzAsZxuPUFRLjKlmwLWcbXz5BmJ8OOhuul/M5iPfawBuSNJmJTZsBz074tccVxoL2A56poipNWf7pWwVVgWwxYNqzS0xS9nO2GNA4smlbB22C8pGcPO7Wae/feBVgF+UrMKmMFUK65tooS1lq/Cv0fiHYbYub/kOm1ajmmHTi59dvTk2x+bYHJtjc2yOzbE5Nsfm2BybY3Nsjs2xOTbH5tgcm2P712z4vujeevLEvmjkzviX3prrMthnbZQGvUI5+hR8w5hi5Vn3S0NAKk70Wgs4soic5ooa4FhPKLU3hLLmLPxXlYeXjnQsh4VePnIYvDVpRi7yy8uMvaqM7MJXDc5v4nJQJtxNfWQ2dtHw1mrBUFqFprv02EVjV+kNDhMCorvtbHWBtPrcPJvPG7T5nEabz7e0+VxQm89TtfocWqvP77X53GOrz4u2+pxtavP55NTKc93/AuS7Y+droYsQAAAAAElFTkSuQmCC"
          alt="linkedin"
        />

        <div className="header_search">
          <Search />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={Home} title={"Home"} />
        <HeaderOption Icon={SupervisorAccount} title={"Network"} />
        <HeaderOption Icon={BusinessCenter} title={"Jobs"} />
        <HeaderOption Icon={Chat} title={"Messaging"} />
        <HeaderOption Icon={Notifications} title={"Notification"} />
        <HeaderOption
          avatar="https://pritam1136.github.io/LandingPage/assets/profile-photo.jpg"
          title={"Me"}
        />
      </div>
    </div>
  );
}

export default Header;
