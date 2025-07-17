// components/CountrySelect.tsx
"use client";

import { useEffect, useState } from "react";

type Country = {
  name: string;
  dial_code: string;
  code: string;
};

export default function CountrySelect({ register }: { register: any }) {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2");
      const data = await res.json();
      const countriesData = data
        .map((country:any) => ({
          name: country.name.common,
          dial_code: country.idd.root ? country.idd.root + (country.idd.suffixes?.[0] || "") : "",
          code: country.cca2,
        }))
        .filter((country: Country) => country.dial_code);
        

      // Optional: sort alphabetically
      countriesData.sort((a: Country, b: Country) => a.name.localeCompare(b.name));
      setCountries(countriesData);
    }

    fetchCountries();
  }, []);

  return (
    <select {...register("countryCode")} className="w-full p-2 border">
      <option value="">Select</option>
      {countries.map((c) => (
        <option key={c.code} value={c.dial_code}>
          {c.name} ({c.dial_code})
        </option>
      ))}
    </select>
  );
}
