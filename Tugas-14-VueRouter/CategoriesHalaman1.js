export const CategoriesHalaman1 = {
  data () {
      return {
          categories: [
              {
                  id: 1,
                  title: 'Halaman 1 - 1'
              },
              {
                  id: 2,
                  title: 'Halaman 1 - 2'
              },
              {
                  id: 3,
                  title: 'Halaman 1 - 3'
              },
              
          ]
      }
  },
  template: `
      <div>
          <h1>Daftar Halaman satu</h1>
          <ul>
              <li v-for="category of categories">
                  <router-link :to="'/categoryHalaman1/'+category.id"> 
                      {{ category.title }} 
                  </router-link>
              </li>
          </ul>
      </div>
  ` 
}