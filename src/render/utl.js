module.exports = {
    clone (pObject) {
        return Object.assign({}, pObject);
    },
    has (pString){
        return function (pObject){
            return pObject.hasOwnProperty(pString);
        };
    },
    isType: function isType(pString){
        return function (pObject){
            return pObject.type === pString;
        };
    },
    pluck (pAttribute){
        return function(pObject){
            return pObject[pAttribute];
        };
    }
};
/*
 This file is part of state-machine-cat.

 smcat is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 smcat is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with smcat.  If not, see <http://www.gnu.org/licenses/>.
 */
