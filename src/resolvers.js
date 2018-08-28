
import jsonwebtoken from 'jsonwebtoken';

import axios from 'axios';

const RPC = (method, params, key) => {
//    var url = "https://conf-nuxt-vit2.c9users.io/confproxy/rpc/";
    var url = "http://comsep.ru/rpc/";
    const data = {method, params};
    const headers = {};
        if(key) {
            //let expired_time = new Date();
            //expired_time.setTime( expired_time.getTime()+12*60*60*1000 )
            const header = 'session_key='+key;
            //console.log(header);
            headers['Cookie'] = header;
        }
    return axios({method: 'post', url, data, headers});
//    return axios.post(url, {method, params});
};

export const resolvers = {
    Query: {
//        async getConfs() {
        getConfs() {
        //    return await Product.find()
            return [
                {_id: 1, name: 'conf 001'},
                {_id: 2, name: 'conf 002'},
                {_id: 3, name: 'conf 003'},
                {_id: 4, name: 'conf 004'},
            ];
        },
    },
    Mutation: {
        coms_login(_, { pin, password }, { req }) {
            let user = null;

///*
            return RPC('user.auth.userEnter', [pin, password])
            .then(function (response) {
              console.log(response.data);
//                console.log(response);

                const session_key = response.data.result;

                return RPC('user.get_user_info', [pin], session_key).then(function (response) {
                  console.log(response.data);

                    const user = {_id: 1, full_name: 'vvv sss'}
                    const jwt_token = jsonwebtoken.sign(
                        user,
        //                process.env.JWT_SECRET,
                        "twert werty erty erty erty erhpu hoihv heqorutwo weruthweoi uwetoyiwuehtywe ery",
                        { expiresIn: '1d' }
                    )
                    const rez = {
                        session_key,
                        jwt_token,
                        user
                    };
                    return rez;


                })


            })
//*/

        },

        login(_, { email, password }, { req }) {
            let user = null;
            if( email=='qqq@gmail.com' && password=='qqq' )
                user = {id: 1, email};

            if (!user) {
                throw new Error('Wrong email or password')
//                throw new Error('No user with that email')
            }

            //const valid = await bcrypt.compare(password, user.password)

        //    if (!valid) {
        //        throw new Error('Incorrect password')
        //    }

//            return user.email;
///*
            return jsonwebtoken.sign(
                { id: user.id, email: user.email },
//                process.env.JWT_SECRET,
                "twert werty erty erty erty erhpu hoihv heqorutwo weruthweoi uwetoyiwuehtywe ery",
                { expiresIn: '1d' }
            )
//*/
        }

/*
        async createProduct(_, { input }) {
            return await Product.create(input);
        },
        async updateProduct(_, { _id, input }) {
            return await Product.findOneAndUpdate({ _id }, input, { new: true })
        },
        async deleteProduct(_, { _id }) {
            return await Product.findByIdAndRemove(_id);
        }
*/
    }
}
