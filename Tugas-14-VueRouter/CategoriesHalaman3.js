export const CategoriesHalaman3 = {
  data () {
      return {
          categories: [
              {
                  id: 1,
                  title: 'Halaman 3 - 1'
              },
              {
                  id: 2,
                  title: 'Halaman 3 - 2'
              },
              {
                  id: 3,
                  title: 'Halaman 3 - 3'
              },
              
          ]
      }
  },
  template: `
      <div>
          <h1>Daftar Halaman tiga</h1>
          <ul>
              <li v-for="category of categories">
                  <router-link :to="'/categoryHalaman3/'+category.id"> 
                      {{ category.title }} 
                  </router-link>
              </li>
          </ul>
      </div>
  ` 
}