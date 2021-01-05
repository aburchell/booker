import faunadb from 'faunadb'

/* configure faunaDB Client with our secret */
const q = faunadb.query
const client = new faunadb.Client({secret: process.env.FAUNADB_SECRET})

const fetchBooks = async () => {
}

exports.handler = (event, context, callback) => {
    console.log("Function - Retrieve book", event);

    // This is the place where I write my FQL (?) to get
    //  what I want from Fauna.
    return client.query(
        q.Map(q.Paginate(q.Documents(q.Collection('books'))),
              q.Lambda('bookRef', q.Get(q.Var('bookRef'))))
    ).then( (response) => {
        console.log("success", response)
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

export default fetchBooks;
