import React, { useState } from "react";
import Button from "../components/button";
import Input from "../components/input";

export default function LicenseRegister() {
  const [fileName, setFileName] = useState("선택된 파일 없음");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "선택된 파일 없음");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[390px] h-[844px] bg-white border border-gray-300 shadow-lg rounded-lg p-4 text-center">
        <h1 className="text-[24px] font-semibold mb-[86px] mt-40">
          의료면허증을 등록해주세요.
        </h1>
        <form>
          {/* 파일 선택 UI */}
          <div className="mb-[51px]">
            <label
              htmlFor="licenseFile"
              className="w-[334px] h-[56px] p-[20px] bg-gray-50 border-none rounded-[12px] focus:outline-none flex items-center justify-between cursor-pointer"
            >
              <span className="text-gray-500">{fileName}</span>
              <span className="bg-[#3F35FF] text-white px-4 py-2 rounded-md text-sm">
                파일 선택
              </span>
            </label>
            <input
              id="licenseFile"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {/* 직접 입력란 */}
          <Input placeholder="직접 입력하기" />

          {/* 다음 버튼 */}
          <div className="mt-[264px]"></div>
          <Button>다음</Button>
        </form>
      </div>
    </div>
  );
}
