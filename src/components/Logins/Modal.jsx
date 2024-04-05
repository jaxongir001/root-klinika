import React, { useState } from "react";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal ochishni boshqaruvchi o'zgaruvchi
  const [username, setUsername] = useState(""); // Username holati
  const [password, setPassword] = useState(""); // Parol holati

  const openModal = () => setIsModalOpen(true); // Modalni ochish funksiyasi
  const closeModal = () => setIsModalOpen(false); // Modalni yopish funksiyasi

  // Inputlardagi ma'lumotlarni localstorage ga saqlash
  const saveDataToLocalstorage = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    closeModal(); // Modalni yopish
  };

  // Sahifani yangilaganda ma'lumotlarni localstorage dan olish
  React.useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    if (savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
    }
  }, []);

  return (
    <>
      <div className="max-w-[1550px] mt-[100px]">
        <div className="w-[90%]rounded-sm m-auto mb-[150px]">
          <div className="flex justify-between mb-[40px]">
            <button
              className="w-[160px] h-[40px] rounded-[50px] text-[white] bg-[#088269] hover:cursor-pointer"
              onClick={openModal} // Modalni ochish funksiyasiga oid
            >
              Войти
            </button>
          </div>

          <div className="flex justify-between">
            {/* Bu yerda katalog kartalari joylashadi */}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-[40px] w-[500px] h-[400px] rounded-lg">
              <h2 className="text-[40px] mb-4 text-center">Login</h2>
              <input
                type="text"
                placeholder="Username"
                className="pl-[10px] w-full h-[40px] border border-gray-500 rounded-[10px] mb-[30px]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="pl-[10px] w-full h-[40px] border border-gray-500 rounded-[10px] mb-[30px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-blue-800 hover:cursor-pointer">
                Forgot password?
              </p>
              <div className="flex gap-[30px]">
                <button
                  className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-[20px]"
                  onClick={() => {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                    setUsername("");
                    setPassword("");
                    closeModal();
                  }}
                >
                  Закрыть
                </button>
                <button
                  className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded-[20px]"
                  onClick={saveDataToLocalstorage} // Ma'lumotlarni saqlash
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Modal;
