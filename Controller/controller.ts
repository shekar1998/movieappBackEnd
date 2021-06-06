import LoginModal from '../Modal/modal'
import Product from '../Modal/products'
import jwt from 'jsonwebtoken'
import { Model } from 'mongoose';



const getProduct = async (req:any, res:any) => {
    try{
        const data = await Product.find({}).sort({ offer: -1 });
        res.status(200).send(data);
    }catch(err)
    {
        res.status(400).send({
            message:err.message
        })
    }
}

const getProductByCatogery = async (req:any, res:any) => {
  try{
      const data = await Product.find({categoryName: req.params["categoryName"]}).sort({ offer: -1 });
      console.log('data', data);
      
      res.status(200).send(data);
  }catch(err)
  {
      res.status(400).send({
          message:err.message
      })
  }
}



const signup = async (req:any, res:any) => {
    try {
      if(req.body.role === 'admin')
      {
        const newUser = await LoginModal.create(req.body);
        res.json({
          data: {
            users: newUser,
          },
        });
        res.status(200).json({
          status: 'SuccessFul',
        });
      }else{
        const newUser = await LoginModal.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          role:req.body.role
        });
     res.send(newUser);
        res.status(200).json({
          status: 'SuccessFul',
        });
      }
      // @ts-ignore
    } catch (err) {
      res.status(400).json({
        status: 'fail',
      });
      console.log(err);
    }

  }
  
 const login = async (req:any, res:any, next:any) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        // @ts-ignore
        return res.status(400).json({
          status: 'The fields are empty please enter the data',
        });
      
      }
      const user = await LoginModal.findOne({ email });
      if(user)
      // @ts-ignore
      if (!user || !(await user.correctPassword(password, user.password))) {
        // @ts-ignore
        // res.status(400).json({
        //   status: 'No Users',
        // });
        return res.send(400).json({
          message: 'UnSuccessFul'
        })
      } else {
        //@ts-ignore
        let token = jwt.sign({ authorization: user.email }, 'VerySecretKey' , { expiresIn: '1h' });
        res.json({
          data: {
            message: 'Login SuccessFul',
          token: token,
          user:user
          }
        })
        // @ts-ignore
        res.json({
          
        });
      }
      next();
    } catch (err) {
      console.log(err);
  
      res.json({
        message: 'UnSuccessFul',
      })
    }
  }

 const isAuthorize = async (req:any, res:any, next:any) => {
  try {
    console.log(req.headers)
    if (req.headers && req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      console.log('Token', token);
      const decode = jwt.verify(token, `VerySecretKey`);
      console.log('Decode', decode);
      // @ts-ignore
      const requestUser = await LoginModal.findOne(decode.email);
      console.log('User', requestUser)
      
      try {
        if (!requestUser) {
          return res.json({ success: false, message: 'Unauthorized Access' });
        } else {
          req.user = requestUser;
          res.json({ success: true, message: ' Successful Access' });
          next();
        }
      } catch (err) {
        if (err.name === 'JsonWebTokenError') {
          return res.json({ success: false, message: 'Unauthorized Access' });
        }
        if (err.name === 'TokenExpiredError') {
          return res.json({ success: false, message: 'Session Expire please try sign again' });
        }
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: 'Error in Authorization',
    });
  }
};

const ProductAdd = async (req:any, res:any) => {
  try{
    console.log('Position', req.body)
    let categoryCheck = await LoginModal.findOne({ category: req.body.categoryName });
    console.log('Res ', categoryCheck)
    if (categoryCheck) {
            let shopDetails = await Product.create({
              shopName: req.body.shopName,
              address: req.body.address,
              product: req.body.product,
              offer: req.body.offer,
              categoryName: req.body.categoryName,
              expire: req.body.expire
            })
            console.log('Position', shopDetails)

            const deleteIn:any =req.body.expire * 3600000;
            console.log('Delete One  ', deleteIn)
            console.log('R  ',shopDetails );
            setTimeout(async () => {
            const pos = await  Product.deleteOne({
                shopName: req.body.shopName
              });
              console.log('pos', pos);
              
            },deleteIn)

            res.send(shopDetails)
         }else{
          
          res.send(400).json({
            message:'Error Cannot Resolve'
          })

         }
      }catch(err){
        res.send(err.message)
      console.log(err);
      res.json({ message: ' Access' });
  }
}

const deleteProduct =async (req:any, res:any) => {
 
  try{
    console.log(req.params.shopName);
    const book = await Product.deleteOne({ shopName: req.params['shopName'] })
    console.log('bppk ', book);
    
    res.status(200).send(book);
  }catch(err){
    console.log(err);
  }
}

export {
    getProduct, ProductAdd, signup, login, isAuthorize, deleteProduct, getProductByCatogery
}


 