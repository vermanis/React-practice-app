import React from 'react'
import { Route, Switch } from 'react-router-dom'

import UserLogin from '../Authentication/UserLogin'
import AdminLogin from '../Authentication/AdminLogin';
import Home from '../HomePage/Home'

import Register from '../Authentication/Register';
import AllCategroies from '../Modules/CategoryModule/AllCategroies';
import UpdateCategory from '../Modules/CategoryModule/UpdateCategory';
import AddCategory from '../Modules/CategoryModule/AddCategory';
import AllLanguages from '../Modules/Language/AllLanguages';
import AddLanguage from '../Modules/Language/AddLanguage';
import UpdateLanguage from '../Modules/Language/UpdateLanguage';
import AllGenre from '../Modules/Genres/AllGenre';
import AddGenre from '../Modules/Genres/AddGenre'
import UpdateGenre from '../Modules/Genres/UpdateGenre'
import About from '../About';
import Feedback from '../Feedback';
import Contact from '../Contact'
import AllUsers from '../Modules/UserModule/AllUsers';
import MyProfile from '../Modules/UserModule/MyProfile';
import AllProducts from '../Modules/ProductModule/AllProducts';
import AddProduct from '../Modules/ProductModule/AddProduct'
import ErrorPage from '../ErrorPage';
import AddAuthorsToProduct from '../Modules/ProductModule/AddAuthorsToProduct';
import ViewOneProductById from '../Modules/ProductModule/ViewOneProductById';
import UpdateProduct from '../Modules/ProductModule/UpdateProduct';
import UpdateProductPublisher from '../Modules/ProductModule/UpdateProductPublisher';
function MyRouterSwitch() { 
    return (
        <>
            <Switch>
            <Route exact path="/"  component={Home}/>
                <Route exact path="/Home" component={Home}/>
                <Route  path="/About-us"  component={About} />
                <Route  path="/Contact" component={Contact} />
                <Route  path="/Feedback" component={Feedback} />
                
                <Route  path="/User-Login" component={UserLogin} />
                <Route  path="/Admin-Login" component={AdminLogin} />
                <Route  path="/SignUp" component={Register} />
                <Route exact path="/product-description/:prod_id" component={ ViewOneProductById } />

                {/* ||||ADMIN|||| */}

                {/* ============CATEGORY============= */}
                <Route exact path="/admin/categories" component={AllCategroies}/>

                <Route exact path="/admin/update-category/:cate_id" component={UpdateCategory} />

                <Route exact path="/admin/add-category" component={AddCategory} />

                {/* ============LANGUAGE============= */}
                <Route exact path="/admin/languages" component={AllLanguages} />

                <Route exact path="/admin/add-language" component={AddLanguage} />

                <Route exact path="/admin/update-language/:lang_id" component={UpdateLanguage} />

                  {/* ============GENRE============= */}
                
                  <Route exact path="/admin/genres" component={AllGenre} />

                <Route exact path="/admin/add-genre" component={AddGenre} />

                <Route exact path="/admin/update-genre/:gen_id" component={UpdateGenre}/>
                {/* ===================PRODUCT=============== */}
                <Route exact path="/admin/products" component={AllProducts} />
                <Route exact path="/admin/add-product" component={AddProduct } />
                <Route exact path="/admin/update-product/:prod_id" component={UpdateProduct} />
                <Route exact path="/admin/update-product-publisher/:prod_id" component={UpdateProductPublisher} />
                
                {/* --------------------- */}
                <Route exact path="/admin/add-authors-to-product/:prod_id" component={AddAuthorsToProduct} />
                {/* ==================USER=================== */}
                <Route exact path="/admin/users" component={AllUsers} />
                <Route exact path="/usere/my-profile" component={MyProfile} />



                <Route path="*" component={ErrorPage} />

            </Switch>

        </>
    )
}

export default MyRouterSwitch
