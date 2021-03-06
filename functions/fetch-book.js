// import faunadb from 'faunadb'

/* configure faunaDB Client with our secret */
let faunadb = require('faunadb');
const q = faunadb.query
const client = new faunadb.Client({secret: process.env.FAUNADB_SECRET})

exports.handler = (event, context, callback) => {
    console.log("Function - Retrieve book", event);

    // This is the place where I write my FQL (?) to get
    //  what I want from Fauna.
    return client.query(
        q.Map(q.Paginate(q.Match(q.Index('all-books'))),
            // q.Documents(q.Collection('books'))),
              q.Lambda('bookRef', q.Get(q.Var('bookRef'))))
    ).then( (response) => {
        console.log("success", response)
        console.log("First book is:", response.data[0])
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(response)})}
    ).catch( (error) => {
        console.log("error", error)
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify(error)})}
    )


  //   return callback(null, {//   statusCode: 200,
  //   body: JSON.stringify({
  //     data: '⊂◉‿◉つ'
  //   })
  // })
}

