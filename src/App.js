import "./App.css"
import Navbar from "./Navbar"
import Article from "./Article"
import LogIn from "./LogIn"
import FrontPage from "./FrontPage"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import { useLocation } from "react-router-dom"

function App() {
  const body = (
    <div>
      <p className="text-gray-900 text-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        pulvinar pharetra nisi sit amet rutrum. Curabitur consectetur metus et
        felis dignissim, eu vulputate neque feugiat. Aenean luctus ex a libero
        mollis ullamcorper. Nulla arcu magna, hendrerit id euismod vitae,
        venenatis eu sapien. Etiam iaculis augue sit amet felis pharetra
        tincidunt. Phasellus a risus sit amet nibh commodo bibendum nec id
        magna. Fusce volutpat augue id lectus tempor volutpat. <br /> <br />{" "}
        Etiam commodo, nisi vitae malesuada fringilla, massa tortor maximus
        mauris, at bibendum lectus ligula in dui. Aenean egestas feugiat lacus
        vel molestie. Duis lobortis ligula quis purus egestas molestie. Sed
        iaculis vitae justo id congue. Quisque convallis aliquet ante, non
        condimentum diam suscipit nec. Fusce eget sollicitudin dui. Phasellus ac
        vehicula risus. Morbi ultricies sapien a libero fermentum hendrerit.
        Mauris commodo, mauris ut consectetur congue, ipsum eros imperdiet
        dolor, id feugiat tortor lorem sed dui. Nulla tincidunt eu tellus non
        pellentesque. Curabitur gravida ex vel sapien interdum, a semper dolor
        rhoncus. Fusce convallis sem nec pharetra pulvinar. Aliquam quis nibh
        mattis, lacinia felis at, sodales justo. Phasellus convallis, ipsum eu
        consectetur malesuada, quam neque finibus diam, quis aliquam nulla nisi
        tempus diam.{" "}
      </p>
      <div className="p-10 flex flex-col">
        <img
          className="m-auto"
          src="http://www.daviddarling.info/images2/Boolean_algebra.jpg"
        />

        <sub className="text-gray-500 text-[14px] text-center mt-2">
          Figure 1: Logic Gates with Boolean Algebra
        </sub>
      </div>
      <p className="text-gray-900 text-[18px]">
        Praesent in facilisis lacus. Nulla auctor velit nunc, et vulputate
        turpis bibendum vitae. Mauris nec augue efficitur, malesuada neque
        vitae, vulputate risus. Nulla sodales dui eu ligula dignissim, dignissim
        convallis ex gravida. Donec non cursus lorem, sed vestibulum libero.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus
        fermentum luctus diam ut scelerisque. Nullam vulputate tempor ante, et
        placerat magna commodo pulvinar. Nunc sapien purus, gravida ut tortor
        sit amet,
      </p>
      <h2 className="font-articleTitle font-bold text-2xl py-2" id="operations">
        Operations
      </h2>
      Aliquam fermentum lectus ut lorem posuere, eget semper massa mollis. Fusce
      in eros in ipsum pulvinar porta non vitae nulla. Aliquam massa diam,
      finibus nec risus nec, mollis aliquet urna. Phasellus viverra lectus quis
      magna accumsan, sit amet porta nisl vestibulum. Sed euismod neque ut urna
      rutrum blandit. Pellentesque pellentesque non justo sed tincidunt.
      <div className="p-10 flex flex-col">
        <img
          className="m-auto"
          src="https://i.ytimg.com/vi/7dvqfpXEjdg/maxresdefault.jpg"
        />

        <sub className="text-gray-500 text-[14px] text-center mt-2">
          Figure 2: Boolean Operations
        </sub>
      </div>
      Quisque congue leo velit, non accumsan elit aliquam sit amet. Aenean non
      ipsum ligula. Nulla varius, nisi ac aliquet consequat, nulla tortor
      ullamcorper orci, non condimentum velit lorem in ipsum. Donec malesuada
      felis tempus ullamcorper pulvinar. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia curae;
      <h2 className="font-articleTitle font-bold text-2xl py-2" id="laws">
        Laws
      </h2>
      Nam volutpat tortor non mauris efficitur finibus. Praesent pharetra
      consequat magna sed interdum. Nullam quis libero a nisi commodo molestie
      quis at elit. Vestibulum eget metus a sapien molestie bibendum vitae ac
      ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut
      quis sapien nisl. Fusce enim velit, tempor id egestas sed, eleifend non
      arcu. Nullam non sodales velit. Integer mattis non est sit amet lacinia.
      Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Etiam in varius massa. Quisque id diam venenatis, aliquam
      risus vel, congue augue.
      <h2 className="font-articleTitle font-bold text-2xl py-2" id="use-cases">
        Use Cases
      </h2>
      Nullam quis luctus lacus. Donec vitae velit sed massa lacinia pulvinar.
      Vivamus ultrices nibh sed fermentum vulputate. Curabitur id risus non
      justo laoreet interdum. Vivamus ac aliquam massa. Maecenas vestibulum,
      quam in interdum consequat, nulla felis ultricies odio, eget volutpat
      magna augue sed justo. Aenean facilisis scelerisque ipsum non lacinia. Ut
      mattis ex nec sollicitudin posuere. In sed vehicula quam. Donec sagittis
      eleifend ligula, sed dapibus tellus semper eu.
      <h2 className="font-articleTitle font-bold text-2xl py-2" id="quiz">
        Quiz
      </h2>
      <form action="">
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 1
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 2
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 3
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 4
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 5
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 6
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 7
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 8
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 9
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 10
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 11
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 12
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 13
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 14
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 15
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            Question 16
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
      </form>
    </div>
  )
  return (
    <div>
      <Navbar currentRoute={useLocation().pathname} />
      <Routes>
        <Route
          path="/article"
          element={
            <Article title="Introduction to Boolean Algebra" body={body} />
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/frontpage" element={<FrontPage />} />
        <Route path="/login" element={<LogIn text={"Sign Up"} />} />
      </Routes>
    </div>
  )
}

export default App
