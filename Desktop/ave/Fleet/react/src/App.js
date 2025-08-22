import { Routes, Route } from "react-router-dom";
import "react-dates/lib/css/_datepicker.css";
import "./styles/app.sass";
import Page from "./components/Page";
import Stays from "./screens/Stays";
import StaysCategory from "./screens/StaysCategory";
import StaysProduct from "./screens/StaysProduct";
import StaysCheckout from "./screens/StaysCheckout";
import StaysCheckoutComplete from "./screens/StaysCheckoutComplete";
import FullPhoto from "./screens/FullPhoto";
import Flights from "./screens/Flights";
import FlightsCategory from "./screens/FlightsCategory";
import ThingsToDo from "./screens/ThingsToDo";
import Category from "./screens/Category";
import Product from "./screens/Product";
import Checkout from "./screens/Checkout";
import CheckoutComplete from "./screens/CheckoutComplete";
import Cars from "./screens/Cars";
import CarsCategory from "./screens/CarsCategory";
import CarsCategory2 from "./screens/CarsCategory2";
import CarsProduct from "./screens/CarsProduct";
import CarsCheckout from "./screens/CarsCheckout";
import CarsCheckoutComplete from "./screens/CarsCheckoutComplete";
import HostProfile from "./screens/HostProfile";
import ProfileUser from "./screens/ProfileUser";
import AccountSettings from "./screens/AccountSettings";
import Support from "./screens/Support";
import PageList from "./screens/PageList";
import MessageCenter from "./screens/MessageCenter";
import Wishlists from "./screens/Wishlists";
import YourTrips from "./screens/YourTrips";
import Bookings from "./screens/Bookings";
import ListYourProperty from "./screens/ListYourProperty";

function App() {
    return (
        <Routes>
            <Route path="/">
                <Route
                    index
                    element={
                        <Page>
                            <Stays />
                        </Page>
                    }
                />
                <Route
                    path="stays-category"
                    element={
                        <Page notAuthorized>
                            <StaysCategory />
                        </Page>
                    }
                />
                <Route
                    path="stays-product"
                    element={
                        <Page separatorHeader>
                            <StaysProduct />
                        </Page>
                    }
                />
                <Route
                    path="stays-checkout"
                    element={
                        <Page separatorHeader>
                            <StaysCheckout />
                        </Page>
                    }
                />
                <Route
                    path="stays-checkout-complete"
                    element={
                        <Page separatorHeader>
                            <StaysCheckoutComplete />
                        </Page>
                    }
                />
                <Route
                    path="full-photo"
                    element={
                        <Page separatorHeader>
                            <FullPhoto />
                        </Page>
                    }
                />
                <Route
                    path="flights"
                    element={
                        <Page>
                            <Flights />
                        </Page>
                    }
                />
                <Route
                    path="flights-category"
                    element={
                        <Page>
                            <FlightsCategory />
                        </Page>
                    }
                />
                <Route
                    path="things-to-do"
                    element={
                        <Page>
                            <ThingsToDo />
                        </Page>
                    }
                />
                <Route
                    path="category"
                    element={
                        <Page>
                            <Category />
                        </Page>
                    }
                />
                <Route
                    path="product"
                    element={
                        <Page separatorHeader>
                            <Product />
                        </Page>
                    }
                />
                <Route
                    path="checkout"
                    element={
                        <Page separatorHeader>
                            <Checkout />
                        </Page>
                    }
                />
                <Route
                    path="checkout-complete"
                    element={
                        <Page separatorHeader>
                            <CheckoutComplete />
                        </Page>
                    }
                />
                <Route
                    path="cars"
                    element={
                        <Page>
                            <Cars />
                        </Page>
                    }
                />
                <Route
                    path="cars-category"
                    element={
                        <Page>
                            <CarsCategory />
                        </Page>
                    }
                />
                <Route
                    path="cars-category-2"
                    element={
                        <Page>
                            <CarsCategory2 />
                        </Page>
                    }
                />
                <Route
                    path="cars-product"
                    element={
                        <Page separatorHeader>
                            <CarsProduct />
                        </Page>
                    }
                />
                <Route
                    path="cars-checkout"
                    element={
                        <Page separatorHeader>
                            <CarsCheckout />
                        </Page>
                    }
                />
                <Route
                    path="cars-checkout-complete"
                    element={
                        <Page separatorHeader>
                            <CarsCheckoutComplete />
                        </Page>
                    }
                />
                <Route
                    path="messages"
                    element={
                        <Page separatorHeader fooferHide wide>
                            <MessageCenter />
                        </Page>
                    }
                />
                <Route
                    path="wishlists"
                    element={
                        <Page separatorHeader>
                            <Wishlists />
                        </Page>
                    }
                />
                <Route
                    path="bookings"
                    element={
                        <Page separatorHeader>
                            <Bookings />
                        </Page>
                    }
                />
                <Route
                    path="your-trips"
                    element={
                        <Page separatorHeader>
                            <YourTrips />
                        </Page>
                    }
                />
                <Route
                    path="list-your-property"
                    element={
                        <Page separatorHeader>
                            <ListYourProperty />
                        </Page>
                    }
                />
                <Route
                    path="profile"
                    element={
                        <Page>
                            <ProfileUser />
                        </Page>
                    }
                />
                <Route
                    path="host-profile"
                    element={
                        <Page>
                            <HostProfile />
                        </Page>
                    }
                />
                <Route
                    path="account-settings"
                    element={
                        <Page>
                            <AccountSettings />
                        </Page>
                    }
                />
                <Route
                    path="support"
                    element={
                        <Page>
                            <Support />
                        </Page>
                    }
                />
                <Route path="/pagelist" element={<PageList />} />
            </Route>
        </Routes>
    );
}

export default App;
