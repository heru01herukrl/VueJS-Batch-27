export const CategoriesHalaman2 = {
  data () {
      return {
          categories: [
              {
                  id: 1,
                  title: 'Halaman 2 - 1'
              },
              {
                  id: 2,
                  title: 'Halaman 2 - 2'
              },
              {
                  id: 3,
                  title: 'Halaman 2 - 3'
              },
              
          ]
      }
  },
  template: `
      <div>
          <h1>Daftar Halaman dua</h1>
          <ul>
              <li v-for="category of categories">
                  <router-link :to="'/categoryHalaman2/'+category.id"> 
                      {{ category.title }} 
                  </router-link>
              </li>
          </ul>
      </div>
  ` 
}