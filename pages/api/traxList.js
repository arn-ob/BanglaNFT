// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"

export default async function handler(req, res) {
    let data = await axios.get("http://localhost:3300/trax/list")
    res.status(200).json(data.data)
  }
  