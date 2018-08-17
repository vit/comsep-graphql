
import jsonwebtoken from 'jsonwebtoken';

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
//        async login(_, { email, password }, { req }) {
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
