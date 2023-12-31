//go:build !no_runtime_type_checking

package cdkcloudfrontassociatealias

import (
	"fmt"

	"github.com/aws/constructs-go/constructs/v10"
)

func validateCloudfrontAliasAssociator_IsConstructParameters(x interface{}) error {
	if x == nil {
		return fmt.Errorf("parameter x is required, but nil was provided")
	}

	return nil
}

func validateNewCloudfrontAliasAssociatorParameters(scope constructs.Construct, id *string, props ICloudfrontAliasAssociatorProps) error {
	if scope == nil {
		return fmt.Errorf("parameter scope is required, but nil was provided")
	}

	if id == nil {
		return fmt.Errorf("parameter id is required, but nil was provided")
	}

	if props == nil {
		return fmt.Errorf("parameter props is required, but nil was provided")
	}

	return nil
}

