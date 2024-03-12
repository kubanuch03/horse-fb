import React from "react";

const MyMap: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7833610319067!2d74.58288367529374!3d42.87741650226111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81899fc5ca3%3A0xe00f47794bf03790!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdGL0Lkg0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQmtGL0YDQs9GL0LfRgdGC0LDQvdCwIC0g0JfQsNC_0LDQtNC90YvQuSDQutCw0LzQv9GD0YE!5e0!3m2!1sru!2skg!4v1708862380704!5m2!1sru!2skg"
      className="w-full h-[450px] border-none"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default MyMap;
