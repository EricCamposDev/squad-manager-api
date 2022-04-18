import { request, response, Router } from "express";
import { createSquadController } from "./api/useCases/CreateSquadUseCase";
import { deleteSquadController } from "./api/useCases/DeleteSquadUseCase";
import { listSquadsController } from "./api/useCases/ListSquadsUsecase";
import { findSquadByIdController } from "./api/useCases/FindSquadByIdUseCase";
import { editSquadController } from "./api/useCases/EditSquadUseCase";

const router = Router()

router.get('/', (request, response) => {
  return response.send("home da api");
});

router.get("/squad", (request, response) => {
  return listSquadsController.handle(request, response)
})

router.get("/squad/:id", (request, response) => {
    return findSquadByIdController.handle(request, response)
})

router.post("/squad", (request, response) => {
  return createSquadController.handle(request, response);
})

router.delete("/squad/:id", (request, response) => {
  return deleteSquadController.handle(request, response);
})

router.put("/squad/:id", (request, response) => {
  return editSquadController.handle(request, response);
})

export { router }