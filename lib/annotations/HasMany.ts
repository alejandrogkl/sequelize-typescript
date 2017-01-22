import {Model} from "../models/Model";
import {SequelizeAssociationService} from "../services/SequelizeAssociationService";

export function HasMany(relatedClassGetter: () => typeof Model, foreignKey?: string) {

  return function (target: any, propertyName: string) {

    SequelizeAssociationService.addAssociation(
      target.constructor,
      SequelizeAssociationService.HAS_MANY,
      relatedClassGetter,
      propertyName,
      foreignKey
    )
  }
}