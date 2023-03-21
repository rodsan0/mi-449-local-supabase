import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://leraardlkwvpueiukdrh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlcmFhcmRsa3d2cHVlaXVrZHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY4NzExMzMsImV4cCI6MTk5MjQ0NzEzM30.cK260gVOgwC5dn94DG_I4I6FMgbX1JFICIEjsfPIsWs'
const supabase = createClient(supabaseUrl, supabaseKey)


async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

  let table = document.getElementById('books');

  for (let book of books) {
    var row = table.insertRow(-1);
    var title = row.insertCell(0);
    var author = row.insertCell(1);
    var isbn = row.insertCell(2);
    var desc = row.insertCell(3);

    title.innerHTML = book.title;
    author.innerHTML = book.author;
    isbn.innerHTML = book.isbn;
    desc.innerHTML = book.description;
  }
}

getBooks();