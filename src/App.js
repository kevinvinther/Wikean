import "./App.css"
import Navbar from "./Navbar"
import Article from "./Article"
import LogIn from "./LogIn"
import FrontPage from "./FrontPage"
import GraphView from "./GraphView"
import BooleanAlgebra from "./BooleanAlgebra"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import { useLocation } from "react-router-dom"

function App() {
  const body = (
    <div>
      <p className="text-gray-900 text-[18px]">
        Boolean algebra is a mathematical system that is used to represent and
        manipulate logical expressions. It is named after George Boole, who
        developed the concept in the mid-19th century.
        <br />
        In Boolean algebra, there are two values: true and false. These values
        are represented by the symbols 1 and 0, respectively. Boolean algebra
        also includes logical operators, such as AND, OR, and NOT, which can be
        used to combine and manipulate these values.
        <br />
        One of the main uses of Boolean algebra is in the design and
        implementation of digital circuits. In these circuits, the values 1 and
        0 correspond to the presence or absence of an electrical current, and
        the logical operators correspond to specific types of electrical gates
        that can be used to process and manipulate these values. <br />
        Boolean algebra is also used in computer programming, where it is used
        to represent and manipulate logical expressions in code. It is a
        fundamental concept in computer science and is used in a wide range of
        applications, including database design, software engineering, and
        artificial intelligence.
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
        Overall, Boolean algebra is a powerful tool that is used to represent
        and manipulate logical expressions in a wide range of fields. It is an
        essential concept for anyone interested in computer science or
        electrical engineering, and has a wide range of practical applications
        in these fields and beyond.
      </p>
      <h2 className="font-articleTitle font-bold text-2xl py-2" id="operations">
        Operations
      </h2>
      The main logical operators in Boolean algebra are:
      <br />
      AND: The AND operator is represented by the symbol & or ∧. It requires
      that both of its operands be true in order to return a value of true.
      Otherwise, it returns a value of false. For example, true & true returns
      true, while true & false returns false.
      <br />
      OR: The OR operator is represented by the symbol | or ∨. It requires that
      at least one of its operands be true in order to return a value of true.
      Otherwise, it returns a value of false. For example, true | true returns
      true, while false | false returns false.
      <br />
      NOT: The NOT operator is represented by the symbol ~ or ¬. It negates the
      value of its operand, so that true becomes false and false becomes true.
      For example, ~true returns false and ~false returns true.
      <br />
      which can be used to manipulate logical expressions in more complex ways.
      <div className="p-10 flex flex-col">
        <img
          className="m-auto"
          src="https://i.ytimg.com/vi/7dvqfpXEjdg/maxresdefault.jpg"
        />

        <sub className="text-gray-500 text-[14px] text-center mt-2">
          Figure 2: Boolean Operations
        </sub>
      </div>
      XOR: The XOR operator is represented by the symbol ⊕. It requires that
      exactly one of its operands be true in order to return a value of true.
      Otherwise, it returns a value of false. For example, true ⊕ false returns
      true, while true ⊕ true returns false.
      <br />
      In addition to these basic logical operators, Boolean algebra also
      includes a number of other operations, such as NAND, NOR, and IMPLIES,
      <h2 className="font-articleTitle font-bold text-2xl py-2" id="laws">
        Laws
      </h2>
      One of the key features of Boolean algebra is the use of laws, which are
      rules that govern the behavior of the logical operators and can be used to
      simplify and manipulate logical expressions. Some of the most important
      laws in Boolean algebra include:
      <br />
      The commutative law: This law states that the order of the operands does
      not matter for the AND and OR operators. For example, a & b is equivalent
      to b & a, and a | b is equivalent to b | a.
      <br />
      The associative law: This law states that the grouping of the operands
      does not matter for the AND and OR operators. For example, (a & b) & c is
      equivalent to a & (b & c), and (a | b) | c is equivalent to a | (b | c).
      <br />
      The distributive law: This law states that the AND and OR operators
      distribute over each other. For example, a & (b | c) is equivalent to (a &
      b) | (a & c), and a | (b & c) is equivalent to (a | b) & (a | c).
      <br />
      The identity law: This law states that the AND and OR operators have true
      and false as their respective identities. For example, a & true is
      equivalent to a, and a | false is equivalent to a.
      <br />
      The inverse law: This law states that the NOT operator negates the value
      of its operand. For example, ~true is equivalent to false, and ~false is
      equivalent to true.
      <br />
      These laws can be used to simplify and manipulate logical expressions in
      Boolean algebra, making it easier to work with complex logical expressions
      and design and implement digital circuits and other applications.
      <h2 className="font-articleTitle font-bold text-2xl py-2" id="use-cases">
        Use Cases
      </h2>
      Boolean algebra has a wide range of practical applications in a number of
      fields, including:
      <br />
      Digital circuits: Boolean algebra is used to design and implement digital
      circuits, which are used to process and manipulate electronic signals. In
      digital circuits, the values true and false correspond to the presence or
      absence of an electrical current, and the logical operators correspond to
      specific types of electrical gates that can be used to process and
      manipulate these values.
      <br />
      Computer programming: Boolean algebra is used to represent and manipulate
      logical expressions in computer programming. It is a fundamental concept
      in computer science and is used in a wide range of applications, including
      database design, software engineering, and artificial intelligence.
      <br />
      Logic and mathematics: Boolean algebra is used in the study of logic and
      mathematics, and is a key component of many branches of mathematics,
      including set theory and proof theory.
      <br />
      Decision making: Boolean algebra is used in decision making to analyze and
      evaluate logical expressions and to determine the best course of action
      based on a set of conditions. It is commonly used in fields such as
      business and economics to analyze data and make informed decisions.
      <h2 className="font-articleTitle font-bold text-2xl py-2" id="quiz">
        Quiz
      </h2>
      <form action="">
        <div className="mt-4">
          <label class="block text-center" for="name">
            What are the two values in Boolean algebra?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            What is the symbol for the AND operator in Boolean algebra?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            What is the commutative law in Boolean algebra?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            What is the associative law in Boolean algebra?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            What is the distributive law in Boolean algebra?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            What is the identity law in Boolean algebra?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            What is the inverse law in Boolean algebra?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            What is the symbol for the OR operator in Boolean algebra?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            What is the symbol for the NOT operator in Boolean algebra?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            What is the symbol for the XOR operator in Boolean algebra?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            In what fields is Boolean algebra commonly used?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            How is Boolean algebra used in digital circuits?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            How is Boolean algebra used in computer programming?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            How is Boolean algebra used in logic and mathematics?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            How is Boolean algebra used in decision making?
          </label>
          <input
            type="text"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mt-4">
          <label class="block text-center" for="name">
            What is the name of the person who developed Boolean algebra?
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
        <Route path="/graphview" element={<GraphView />} />
        <Route path="/booleanalgebra" element={<BooleanAlgebra />} />
      </Routes>
    </div>
  )
}

export default App
