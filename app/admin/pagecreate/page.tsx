"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const createPageAction = async () => {
  console.log("Test pageCreate");
};

const pageCreate = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10 pt-36">
        {/* Service Form */}
        <h1 className="text-2xl font-semibold capitalize">NewPage</h1>
        <div>
          <form action={createPageAction}>
            <div className="mb-2">
              <Label htmlFor="kw_title">Title</Label>
              <Input name="kw_title" type="text" />
            </div>
            <Button type="submit" size="sm" className="bg-blue-500">
              CreatePage
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default pageCreate;
